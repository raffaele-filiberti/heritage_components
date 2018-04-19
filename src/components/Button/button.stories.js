import React from 'react';

import md from './button.md';

import {storiesOf} from '@storybook/react';

import {action} from '@storybook/addon-actions';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import backgrounds from "@storybook/addon-backgrounds";

import Button from './';

const options = {
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    danger: 'danger'
};

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(backgrounds([
        { name: "white", value: "#fff", default: true },
        { name: "black", value: "#161516" },
    ]))
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
    .add('base', withNotes(md)(() => (
            <Button className={select('Class', options, 'primary')}
                    disabled={boolean('Disabled', false)}
                    onClick={action('clicked')}
                    label={text('Label', 'Hello Button')}/>
        )
    ));