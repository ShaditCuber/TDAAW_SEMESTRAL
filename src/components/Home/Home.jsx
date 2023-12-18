export const Home = () => {
    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <div className="bg-white h-full w-full" >1</div>
            <div className="bg-white h-full w-full" >2</div>
            <div className="bg-white h-full w-full row-span-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptate quod sed necessitatibus iure impedit velit asperiores deserunt facere sunt quo id distinctio veniam, aspernatur, delectus laborum, voluptates autem voluptatum?</div>
            <div className="bg-white h-full w-full row-span-3 col-start-1 row-start-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed itaque at ducimus dolorum! Amet aliquid possimus omnis natus praesentium cum id perspiciatis, maxime quisquam inventore repudiandae. Sapiente, amet dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dicta sit ab provident consectetur consequuntur hic eligendi dolorem libero, nam modi unde nulla aperiam? Culpa, commodi atque. Suscipit, nulla quidem?</div>
            <div className="bg-white h-full w-full row-span-2 col-start-2 row-start-2">7</div>
            <div className="bg-white h-full w-full col-span-2 col-start-1 row-start-5">8</div>
            <div className="bg-white h-full w-full col-start-2 row-start-4">9</div>
            <div className="bg-white h-full w-full col-span-2 row-span-5 col-start-4 row-start-1">10</div>
        </div>

    );
}