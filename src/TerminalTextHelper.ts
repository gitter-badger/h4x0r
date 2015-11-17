/// <reference path="../tsDefinitions/phaser.d.ts" />

module Haxor
{
	export class TerminalTextHelper
	{
		//https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
		codeto: Object = {
			"\x1b[39;49m":"gray", //default color
			"\x1b[0m":"gray", //default everything, but only color is supported
			"\x1b[30m":"black",
			"\x1b[31m":"red",
			"\x1b[32m":"green",
			"\x1b[33m":"yellow",
			"\x1b[34m":"blue",
			"\x1b[35m":"magenta",
		}
		
		original: Phaser.BitmapData;
		game: Phaser.Game;
		
		
		constructor(game: Phaser.Game, bdata: Phaser.BitmapData)
		{
			this.game = game;
			this.original = this.game.make.bitmapData().load("terminal");
		}
		
		addFont()
		{
			this.game.add.retroFont("console", 8, 12, Phaser.RetroFont.TEXT_SET1, 1);
		}
		
		createColoredMap(r: number, g: number, b: number, br: number = null, bg:number = null, bb:number = null, ba:number = null) : RetroFont
		{
			if(br === null || bg === null || bb === null)
			{
                return this.original.replaceRGB(255,255,255,255,r,g,b,255);
			}
			else
			{
				return this.original.replaceRGB(255,255,255,255,r,g,b,255).replaceRGB(0,0,0,0,br,bg,bb,255);
			}
		}
	}
}