import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {boolean, text, select, withKnobs} from '@storybook/addon-knobs/react';

import Button from './';

const options = {
    btnPrimary: 'primary',
    btnSuccess: 'success',
    btnWarning: 'warning',
    btnDanger: 'danger'
};

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(story => (
        <div style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {story()}
        </div>
    ))
    .add('base', () => (
            <Button className={select('Class', options, 'btnPrimary')}
                    disabled={boolean('Disabled', false)}
                    onClick={action('clicked')}
                    label={text('Label', 'Hello Button')}/>
        )
    );