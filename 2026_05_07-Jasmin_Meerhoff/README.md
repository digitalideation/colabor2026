# Concrete Poetry in P5LIVE

+Colabor – May 7, 2026

Jasmin Meerhoff

<a href="https://nervousdata.com">nervousdata</a>

## Materials and Notes
* Slides
* <a href="https://cryptpad.fr/pad/#/2/pad/edit/Qvyn2SbHBdLJG1eBQKW2a7MY/">CryptPad</a> for notes, questions and sharing code snippets

## Overview
* Intro-Talk
* Concrete Poetry (without computers)
* text()
* Text Attributes
* Arrays and Strings
* JavaScript String Methods

## Conceptual Constraints
* two colours (black/white, grey/blue – to your preference)
* monospace font (typewriter-style)
* 2D

## text()

<code>text(string, x, y, [x2], [y2])</code>

<code>text("live", 10, 10, windowWidth, windowHeight);</code>

<code>"live"</code> — string containing alphanumeric symbols <strong>live</strong>

<code>10</code> — x- and y-coordinates of the text

<code>windowWidth</code> — sets width of text box to the whole width of the window

<code>windowHeight</code> — sets height of text box to the whole height of the window

The <code>string</code> can be taken from variables, too. Display, for example, the number of frames taken from <code>frameCount</code>.

## Text Attributes

<code>textSize(50)</code> – values in pixel

<code>textAlign(LEFT)</code> – LEFT, RIGHT or CENTER

<code>textFont('monospace')</code> – font name or generic family (monospace)

<code>textLeading(50)</code> – values in pixel

<code>textWrap(CHAR)</code> – WORD or CHAR

<code>textStyle(NORMAL)</code> – NORMAL, ITALIC, BOLD or BOLDITALIC


## Arrays and Strings

<code>let arr = []</code> – empty array

<code>arr.push("one")</code> – adds a string to an array

<code>arr[0]</code> – address item of an array with its index number

## JavaScript String Methods
<code>.length</code> – gives length of string (number of characters it contains)

<code>.repeat(#)</code> – repeats the string a set number of times (doesn’t work with variables containing numbers)

<code>.replace(/a/g,"---")</code> – replaces every character <strong>a</strong> with <strong>---</strong>


### Regular Expressions

<code>.replace()</code> works with so-called Regular Expressions (search patterns).

<code>/ … /</code> enlose the search pattern in forward slashes

<code>a</code> – the literal character "a"

<code>.</code> – matches any character, except newline (\n)

<code>\w</code> – a word character; ASCII letter, digit or underscore. it doesn’t match umlauts or letters like æ or ø

<code>\s</code> – a whitespace character

<code>g</code> – a flag, inserted after the search pattern. matches all occurrences, globally. without this flag it would only match the first occurrence.


## References
* <a href="https://nervousdata.com/compoetry/index">comPoetry</a> – Extended Workshop/How-To for Computer-aided Poetry by Jasmin Meerhoff
* <a href="https://creative-coding.decontextualize.com/text-and-type/">Text and Type</a> – Tutorial for text and type in p5.js by Allison Parrish
