import { HStack, Text, Image, List, ListItem, Spinner, Skeleton, SkeletonText, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../service/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectedGenre} : Props) => {
  const { data, isLoading, error } = useGenres();
  const genreSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  if(error) return null;

  return (
    <List>
      {isLoading && genreSkeletons.map( (skeleton) => (
        <ListItem key={skeleton} paddingY="5px">
          <GenreListSkeleton />
        </ListItem> 
      ))}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={() => onSelectedGenre(genre)} fontSize="lg" variant='link' >{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
