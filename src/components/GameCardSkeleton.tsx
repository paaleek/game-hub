import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px">
      <Skeleton height={"200px"} width="100%"></Skeleton>
      <CardBody>
        <SkeletonText noOfLines={4} spacing={4} width="100%"></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
