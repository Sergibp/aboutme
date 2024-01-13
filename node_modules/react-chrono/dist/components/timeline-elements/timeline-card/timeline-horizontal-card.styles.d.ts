import { Theme } from '../../../models/Theme';
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Item: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CircleWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
interface CircleModel {
    dimension?: number;
    theme?: Theme;
}
export declare const Circle: import("styled-components").StyledComponent<"div", any, CircleModel, never>;
export declare const TimelineTitleContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TimelineContentContainer: import("styled-components").StyledComponent<"div", any, {
    active?: boolean | undefined;
    highlight?: boolean | undefined;
    position?: string | undefined;
    theme?: Theme | undefined;
}, never>;
export {};
