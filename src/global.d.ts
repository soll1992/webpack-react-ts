declare module '*scss' {
    interface ICalssNames {
        [className: string]: string
    }
    const classNames: ICalssNames;
    export = classNames;
}