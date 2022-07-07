import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
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

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
