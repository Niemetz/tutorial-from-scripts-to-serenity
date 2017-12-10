// spec/screenplay/tasks/start.ts

import { PerformsTasks, Task } from 'serenity-js/protractor';
import { Open } from 'serenity-js/protractor';

export class Start implements Task {

    static withATodoListContaining(items: string[]) {          // static method to improve the readability
        return new Start(items);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Open.browserOn('/examples/angularjs/'),
            ...this.addAll(this.items)                          // ``...` is a spread operator,
        );                                                      // which converts a list to vararg
    }

        constructor(private items: string[]) {                  // constructor assigning the list of items
    }
        private addAll(items: string[]): Task[] {               // transforms a list of item names
        return items.map(item => AddATodoItem.called(item));    // into a list of Tasks
    }                                                           // to a private field
}
