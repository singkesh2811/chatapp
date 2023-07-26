import { CloseIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/layout";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
    const boxStyles = {
    px: 2,
    py: 1,
    borderRadius: "lg",
    m: 1,
    mb: 2,
    variant: "solid",
    fontSize: 12,
    colorScheme: "purple",
    cursor: "pointer",
      };
    
  return (
    <Badge
      style={boxStyles}
      onClick={handleFunction}
    >
      {user.name}
      <CloseIcon pl={1} />
    </Badge>
  );
};

export default UserBadgeItem;