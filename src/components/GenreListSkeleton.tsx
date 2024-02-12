import {
  HStack,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <SkeletonCircle height='45px' width='45px' borderRadius={8} />
      <Skeleton width="100px"  height='20px'/>
    </HStack>
  );
};

export default GenreListSkeleton;
