import { BehaviorSubject } from 'rxjs';

class PersistRepository {
  private saveValue = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  private getValue = (key: string) => {
    const value = localStorage.getItem(key);

    if (value !== null) {
      return JSON.parse(value);
    }
  };

  public persist = <T extends object>(
    context: T,
    config: {
      blackList: string[];
    }
  ) => {
    for (const key in context) {
      if (context.hasOwnProperty(key)) {
        const object = context[key];

        if (
          object instanceof BehaviorSubject &&
          !config.blackList.includes(key)
        ) {
          const uniqKey = `${context.constructor.name}.${key}`;
          const persistedValue = this.getValue(uniqKey);

          if (persistedValue !== undefined) {
            object.next(persistedValue);
          }

          object.subscribe((newValue) => {
            this.saveValue(uniqKey, newValue);
          });
        }
      }
    }
  };
}

export default PersistRepository;
