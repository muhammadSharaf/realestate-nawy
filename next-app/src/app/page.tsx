import Link from "next/link";
import NavigationButton from "@/components/elements/buttons/NavigationButton";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className={"flex flex-1 flex-col"}>
                <h1 className="my-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                    {`Welcome to `}
                    <span className="text-red-600">
              RealEstate
            </span>
                </h1>

                <div className={"mt-24 flex justify-center gap-4"}>
                    <NavigationButton title={'Apartments'} goTo={'./apartments'}/>
                    <NavigationButton title={'Admin'} goTo={'./admin'}/>
                </div>
            </div>
        </main>
    );
}
