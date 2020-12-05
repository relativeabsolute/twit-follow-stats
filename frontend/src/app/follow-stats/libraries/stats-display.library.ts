import { IStatsDisplay } from './../../interfaces/stats-display';
export function mapBooleansToData(featureName: string, object: any): (data) => IStatsDisplay {
    return (data) => {
        switch (data) {
            case 'areNot':
                return { name: `Not ${featureName}`, value: object[data] };
            case 'are':
                return { name: `${featureName}`, value: object[data] };
        }
    };
}
