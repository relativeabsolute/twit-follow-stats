import { IStatsDisplay } from './stats-display';

export interface IStatsDisplayConfig {
    showLegend: boolean;
    showLabels: boolean;
    data: IStatsDisplay[];
    legendPosition: 'below' | 'right';
    gradient: boolean;
    trimLabels: boolean;
}
