import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;

  return (
    <>
      {options.map(name => {
        let upperCaseFirstLeterName =
          name.charAt(0).toUpperCase() + name.substring(1);
        return (
          <Button
            type="button"
            key={name}
            name={name}
            onClick={() => {
              onLeaveFeedback(name);
            }}
          >
            {upperCaseFirstLeterName}
          </Button>
        );
      })}
    </>
  );
}
