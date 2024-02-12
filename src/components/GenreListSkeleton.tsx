import {
  HStack,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <SkeletonCircle height='32px' width='32px' borderRadius={8} />
      <Skeleton width="120px"  height='20px'/>
    </HStack>
  );
};

export default GenreListSkeleton;
