type Coordinates = {
	lat: number;
	lng: number;
};

type Nullable<T> = T | null;
type Optional<T> = T | undefined;

type OptionalNullable<T> = Optional<Nullable<T>>;
