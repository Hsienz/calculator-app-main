/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			colors: {
				// Theme 1

				// Backgrounds

				Very_dark_desaturated_blue_main_bg /*(main background)*/:
					"hsl(222, 26%, 31%)",
				Very_dark_desaturated_blue_toggle_keypad_bg /*(toggle background, keypad background)*/:
					"hsl(223, 31%, 20%)",
				Very_dark_desaturated_blue_screen_bg /*(screen background)*/:
					"hsl(224, 36%, 15%)",

				// Keys

				Desaturated_dark_blue_key_bg /*(key background)*/:
					"hsl(225, 21%, 49%)",
				Desaturated_dark_blue_key_shadow /*(key shadow)*/: "hsl(224, 28%, 35%)",

				Red /*(key background, toggle)*/: "hsl(6, 63%, 50%)",
				Dark_red /*(key shadow)*/: "hsl(6, 70%, 34%)",

				Light_grayish_orange /*(key background)*/: "hsl(30, 25%, 89%)",
				Grayish_orange /*(key shadow)*/: "hsl(28, 16%, 65%)",

				// Text

				Very_dark_grayish_blue: "hsl(221, 14%, 31%)",
				White: "hsl(0, 0%, 100%)",

				// Theme 2

				// Backgrounds

				Light_gray /*(main background)*/: "hsl(0, 0%, 90%)",
				Grayish_red /*(toggle background, keypad background)*/:
					"hsl(0, 5%, 81%)",
				Very_light_gray /*(screen background)*/: "hsl(0, 0%, 93%)",

				// Keys

				Dark_moderate_cyan /*(key background)*/: "hsl(185, 42%, 37%)",
				Very_dark_cyan /*(key shadow)*/: "hsl(185, 58%, 25%)",

				Orange /*(key background, toggle)*/: "hsl(25, 98%, 40%)",
				Dark_orange /*(key shadow)*/: "hsl(25, 99%, 27%)",

				Light_grayish_yellow /*(key background)*/: "hsl(45, 7%, 89%)",
				Dark_grayish_orange /*(key shadow)*/: "hsl(35, 11%, 61%)",

				// Text

				Very_dark_grayish_yellow: "hsl(60, 10%, 19%)",
				White /*(text)*/: "hsl(0, 0%, 100%)",

				// Theme 3

				// Backgrounds

				Very_dark_violet_main_bg /*(main background)*/: "hsl(268, 75%, 9%)",
				Very_dark_violet_toggle_keypad_screen_bg /*(toggle background, keypad background, screen background)*/:
					"hsl(268, 71%, 12%)",

				// Keys

				Dark_violet /*(key background)*/: "hsl(281, 89%, 26%)",
				Vivid_magenta /*(key shadow)*/: "hsl(285, 91%, 52%)",

				Pure_cyan /*(key background, toggle)*/: "hsl(176, 100%, 44%)",
				Soft_cyan /*(key shadow)*/: "hsl(177, 92%, 70%)",

				Very_dark_violet /*(key background)*/: "hsl(268, 47%, 21%)",
				Dark_magenta /*(key shadow)*/: "hsl(290, 70%, 36%)",

				// Text

				Light_yellow: "hsl(52, 100%, 62%)",
				Very_dark_blue: "hsl(198, 20%, 13%)",
				White /*(text)*/: "hsl(0, 0%, 100%)",
			},
			fontFamily: {
				sans: ["League Spartan", "sans-serif"],
			},
		},
	},
  safelist: [
    {
      pattern: /bg-.*/
    }
  ],
	plugins: [],
};
