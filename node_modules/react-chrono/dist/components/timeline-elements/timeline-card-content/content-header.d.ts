import { FunctionComponent } from 'react';
import { TimelineContentModel } from '../../../models/TimelineContentModel';
export type ContentHeaderProps = Pick<TimelineContentModel, 'theme' | 'url' | 'title' | 'media' | 'content'>;
declare const ContentHeader: FunctionComponent<ContentHeaderProps>;
export { ContentHeader };
