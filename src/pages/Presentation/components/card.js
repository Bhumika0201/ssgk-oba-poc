import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { string } from "prop-types";

function SimpleCard({ title, description }) {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
// Setting default props for the ExampleCard
SimpleCard.defaultProps = {
  title: "",
  description: "",
};
SimpleCard.propTypes = {
  title: string,
  description: string,
};
export default SimpleCard;
