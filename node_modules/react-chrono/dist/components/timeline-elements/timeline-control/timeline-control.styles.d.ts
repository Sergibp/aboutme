import { Theme } from '../../../models/Theme';
import { TimelineMode } from '../../../models/TimelineModel';
export declare const TimelineNavWrapper: import("styled-components").StyledComponent<"ul", any, {
    theme?: Theme | undefined;
}, never>;
export declare const TimelineNavItem: import("styled-components").StyledComponent<"li", any, {
    disable?: boolean | undefined;
}, never>;
export declare const TimelineNavButton: import("styled-components").StyledComponent<"button", any, {
    mode?: TimelineMode | undefined;
    rotate?: "TRUE" | "FALSE" | undefined;
    theme?: Theme | undefined;
}, never>;
export declare const TimelineControlContainer: import("styled-components").StyledComponent<"div", any, {
    flip?: boolean | undefined;
    slideShowActive?: boolean | undefined;
}, never>;
export declare const ControlButton: import("styled-components").StyledComponent<"button", any, {
    theme?: Theme | undefined;
}, never>;
export declare const MediaToggle: import("styled-components").StyledComponent<"button", any, {
    theme?: Theme | undefined;
}, never>;
export declare const ReplayWrapper: import("styled-components").StyledComponent<"button", any, {
    theme?: Theme | undefined;
}, never>;
