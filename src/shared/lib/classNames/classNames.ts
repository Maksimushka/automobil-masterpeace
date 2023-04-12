type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
    const filteredMods = Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([cls]) => cls);

    const result = [cls, ...additional, ...filteredMods];

    return result.join(' ');
};
