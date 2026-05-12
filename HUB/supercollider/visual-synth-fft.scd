(
s.newBusAllocators;
~bins = 64;
~size = ~bins*4;
~hop = 0.25;
~win = 0;
~imagBus = Bus.control(s, ~size);

f = Array.rand(~size, 0, 1);
f.do({
  arg item, i;
  ~imagBus.setAt(i, item);
});

~setBus = {
  arg list;
  list.do({
    arg item, i;
    ~imagBus.setAt(i, item);
  })
}
)


ServerOptions.inDevices;

(
OSCdef(
  key: \image,
  func: {
    arg msg, time, addr, recvPort;
		// msg.postln;
    msg.do({
      arg item, i;
      if(i>0,
        {~imagBus.setAt(i, item)}
      );
    })
  },
  path: '/image');
)

OSCdef.freeAll



(

SynthDef(\spectralimage, {
  arg in=0, rbuf;
  var mask = ~size.collect ({ arg i; In.kr(~imagBus.index + i) });
  var input, chain, sig, noise, mic;
  input = WhiteNoise.ar() * -12.dbamp;
  chain = FFT(LocalBuf(~size), input);
  chain = chain.pvcalc(~size, {
    arg mags, phases;
    [mags*mask, phases*mask]
  });
  sig = IFFT(chain);
	// Out.ar(\aux.kr(~recBus), sig!2 * \send.kr(0.dbamp));
  sig = sig * \amp.kr(-6.dbamp);
  Out.ar(\out.kr(0), sig!2);
}).add;
)

(
SynthDef(\spectral, {
	arg out = 0, freq = 120;
	// var half_size = ~size / 2;
	var freqs = (1..~bins).linexp(1, ~bins, 30, 8000);
	// show linlin difference
	var amps = ~bins.collect({ arg i; In.kr(~imagBus.index + (i*2)) / ~bins});
	var sig = SinOsc.ar(freq + freqs, mul: amps);
	sig = Mix.ar(sig);
	Out.ar(out, sig!2)
}).add;

)
s.meter
~spec = Synth(\spectral, [\freq, 40])
~spec.set(\freq, 1000)
~spec.free


~specimg = Synth(\spectralimage,[\out, 0])


~specimg.free

FreqScope.new(400, 300);