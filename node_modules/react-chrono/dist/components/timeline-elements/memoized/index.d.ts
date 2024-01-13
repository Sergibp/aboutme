import React from 'react';
import { Content, Title } from './memoized-model';
declare const MemoTitle: {
    ({ title, url, theme, color, dir, active, fontSize, classString, }: Title): JSX.Element | null;
    displayName: string;
};
declare const MemoSubTitle: React.NamedExoticComponent<Content>;
export { MemoTitle, MemoSubTitle };
