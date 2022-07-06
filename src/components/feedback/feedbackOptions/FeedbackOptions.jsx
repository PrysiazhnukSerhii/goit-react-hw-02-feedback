import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions(props) {
  return (
    <>
      {props.options.map(name => {
        let upperCaseFirstLeterName =
          name.charAt(0).toUpperCase() + name.substring(1);
        return (
          <Button
            type="button"
            key={name}
            name={name}
            onClick={() => {
              props.onLeaveFeedback(name);
            }}
          >
            {upperCaseFirstLeterName}
          </Button>
        );
      })}
    </>
  );
}
