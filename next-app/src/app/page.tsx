import ButtonNavigation from "@/components/elements/buttons/ButtonNavigation";
import Header from "@/components/elements/header/Header";

export default function Home() {
    return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className={"flex flex-1 flex-col"}>
            <Header title={'Welcome to '}>
                <span className="text-red-600">
                    RealEstate
                </span>
            </Header>

            <div className={"mt-24 flex justify-center gap-4"}>
                <ButtonNavigation title={'Apartments'} goTo={'./apartments'}/>
                <ButtonNavigation title={'Admin'} goTo={'./admin'}/>
            </div>
        </div>
    </main>);
}
