export type KeyType = "normal" | "function" | "special";

export interface IKeyProp {
	type: KeyType;
	content: string;
	pressKey: string;
    onClick: () => void;
    colSpan: number;
}

export interface IButtonProp {
	$type: KeyType;
    $theme: number;
    $colSpan:number;
}

export interface ITheme {
    normal: string
    function: string
    special: string
}
