import { Button } from './FeedbackOptions.styled';

const nameButton = ['Good', 'Neutral', 'Bad'];

export function CreateFeedbackForm(props) {
  return (
    <>
      {nameButton.map(name => (
        <Button
          type="button"
          key={name}
          name={name}
          onClick={() => {
            props.total(name);
            props.count();
            props.positivCount();
          }}
        >
          {name}
        </Button>
      ))}
    </>
  );
}
