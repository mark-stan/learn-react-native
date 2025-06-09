import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ShoppingListItemProps = {
  name: string;
  isCompleted?: boolean;
};
export const ShoppingListItem = ({
  name,
  isCompleted,
}: ShoppingListItemProps) => {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "It will be deleted permanently",
      [
        {
          text: "Yes",
          onPress: () => console.log(`Delete ${name}`),
          style: "destructive",
        },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };

  return (
    <View style={[styles.container, isCompleted && styles.completedContainer]}>
      <Text style={[styles.itemName, isCompleted && styles.completedItemName]}>
        {name}
      </Text>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => !isCompleted && handleDelete()}
      >
        <Ionicons
          name="close-circle"
          size={24}
          color={isCompleted ? Colors.gray : Colors.red}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.cerulean,
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedContainer: {
    backgroundColor: Colors.lightGray,
    borderColor: Colors.lightGray,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 200,
  },
  completedItemName: {
    color: Colors.gray,
    textDecorationLine: "line-through",
  },
  iconButton: {
    padding: 4,
  },
});
