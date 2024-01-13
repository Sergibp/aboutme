import { Theme } from '../../models/Theme';
import { TimelineMode } from '../../models/TimelineModel';
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {
    cardPositionHorizontal?: "TOP" | "BOTTOM" | undefined;
    hideControls?: boolean | undefined;
}, never>;
export declare const TimelineMainWrapper: import("styled-components").StyledComponent<"div", any, {
    mode?: TimelineMode | undefined;
    scrollable?: boolean | {
        scrollbar: boolean;
    } | undefined;
    theme?: Theme | undefined;
}, never>;
export declare const TimelineMain: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Outline: import("styled-components").StyledComponent<"div", any, {
    color?: string | undefined;
    height?: number | undefined;
}, never>;
export declare const TimelineControlContainer: import("styled-components").StyledComponent<"div", any, {
    active?: boolean | undefined;
    mode?: TimelineMode | undefined;
}, never>;
export declare const TimelineContentRender: import("styled-components").StyledComponent<"div", any, {
    showAllCards?: boolean | undefined;
}, never>;
