import { readOnly } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as injectService } from '@ember/service';
import { classNames } from '@ember-decorators/component';

@classNames('idleDisplay')
export default class IdleDisplay extends Component {
  @injectService('user-idle') // use the dummy's version, don't pull from addon directly
  userIdle;

  @readOnly('userIdle.isIdle')
  isIdle;

  @computed('isIdle')
  get status() {
    return this.isIdle ? 'idle' : 'not idle';
  }
}
