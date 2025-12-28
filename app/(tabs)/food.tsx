// import FoodSkeleton from "@/components/common/FoodSkeleton";
import FoodSkeleton from "@/components/common/foodskeleton";
import EmptyState from "@/components/emptyState";
import ErrorState from "@/components/errorState";
import FilterBar from "@/components/home/filterBar";
import { useItemsStore } from "@/hooks/store/useItemsStore";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function Food() {
    const router = useRouter();
    const {
        items,
        loading,
        loadingMore,
        error,
        loadItems,
        hasMore,
    } = useItemsStore();

    useEffect(() => {
        loadItems(true);
    }, []);

    if (loading) {
        return (
            <FlatList
                data={Array.from({ length: 8 })}
                keyExtractor={(_, i) => i.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                ListHeaderComponent={
                    <>
                        <View style={styles.topSection}>
                            <Text style={styles.userName}>Food Recipe</Text>
                        </View>
                        <View style={styles.filterWrapper}>
                            <FilterBar />
                        </View>
                        <Text style={styles.title}>Recommended For You</Text>
                    </>
                }
                renderItem={() => <FoodSkeleton count={1} />}
            />
        );
    }
    if (error) return <ErrorState message={error} onRetry={() => loadItems(true)} />;
    if (!items?.length) return <EmptyState />;

    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}

            /* 🔹 HEADER (replaces ScrollView content) */
            ListHeaderComponent={
                <>
                    {/* HEADER FULL WIDTH */}
                    <View style={styles.topSection}>
                        <Text style={styles.userName}>Food Recipe</Text>
                    </View>

                    {/* FILTER BAR FULL WIDTH */}
                    <View style={styles.filterWrapper}>
                        <FilterBar />
                    </View>

                    {/* Title with padding */}
                    <Text style={styles.title}>Recommended For You</Text>
                </>

            }

            renderItem={({ item }) => (
                <Pressable
                    style={styles.card}
                    onPress={() =>
                        router.push({
                            pathname: "/screens/foodItem/[id]",
                            params: { id: String(item.id) },
                        })
                    }
                >
                    <View style={styles.imageWrapper}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.name} numberOfLines={2}>
                            {item.name}
                        </Text>

                        <View style={styles.ratingRow}>
                            <View style={styles.ratingBox}>
                                <MaterialIcons name="star" size={14} color="#fff" />
                                <Text style={styles.ratingText}>
                                    {item.rating.toFixed(1)}
                                </Text>
                            </View>

                            <Text style={styles.metaText}>
                                {item.cuisine} • {item.difficulty}
                            </Text>
                        </View>

                        <Text style={styles.price}>
                            {item.caloriesPerServing} cal
                        </Text>
                    </View>
                </Pressable>
            )}
            onEndReached={() => loadItems()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
                loadingMore ? (
                    <ActivityIndicator style={{ marginVertical: 16 }} />
                ) : null
            }
        />
    );
}


const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        // flex: 1,
        backgroundColor: "#f3f4f6",
        //  paddingTop: 60

    },
   
    userName: {
        fontSize: 20,
        fontWeight: "700",
        marginLeft: 30
    },
   

    wrapper: {
        paddingHorizontal: 16,
        paddingTop: 16,
        backgroundColor: "#f3f4f6",
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 12,
    },

    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 7,
        marginBottom: 14,
        overflow: "hidden",
        elevation: 1,
    },

    imageWrapper: {
        width: 130,
        height: 130,
    },

    image: {
        width: "100%",
        height: "100%",
    },

    offerTag: {
        position: "absolute",
        bottom: 6,
        left: 6,
        backgroundColor: "#ef4444",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },

    offerText: {
        color: "#fff",
        fontSize: 11,
        fontWeight: "700",
    },

    content: {
        flex: 1,
        padding: 10,
        justifyContent: "space-between",
    },

    name: {
        fontSize: 15,
        fontWeight: "700",
    },

    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },

    ratingBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#16a34a",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginRight: 8,
    },

    ratingText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "700",
        marginLeft: 2,
    },

    metaText: {
        fontSize: 12,
        color: "#6b7280",
    },

    price: {
        fontSize: 14,
        fontWeight: "700",
        marginTop: 4,
    },

    deliveryRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
    },

    deliveryText: {
        fontSize: 12,
        color: "#16a34a",
        marginLeft: 4,
        fontWeight: "600",
    },
    topSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: "#fff",
        paddingTop: 60,
        marginHorizontal: -20,
        marginBottom: 10,
        width: "110%", // full width
    },

    filterWrapper: {
        width: "100%", // FilterBar takes full width
    },

    listContent: {
        paddingHorizontal: 16, // only FlatList items
        paddingTop: 16,
        paddingBottom: 24,
        backgroundColor: "#f3f4f6",
    },

});
