import '../icons/clock';
import '../icons/times-circle';
import config from 'veui/managers/config';

config.defaults(
    {
        icons: {
            clock: 'clock', // check
            clear: 'times-circle', // TODO new icon
        },
        ui: {
            size: {
                values: ['s', 'm'],
                default: 's',
                inherit: true
            }
        },
        parts: {
            clear: 'icon aux'
        }
    },
    'timepicker'
);
