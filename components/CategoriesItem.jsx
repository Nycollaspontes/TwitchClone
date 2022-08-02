import Image from "next/image";

export function CategoriesItem({ img, title, viewers, tag1, tag2 }) {
    return (
        <div className='p-2'>
            <Image
                src={img}
                width='261'
                height='350'
                alt="//"
            />
            <div>
                <p className='font-bold'>{title}</p>
                <p className='text-sm text-gray-500 py-[2px]'>{viewers} viewers</p>
                <div className="flex ">
                    <div className=''>
                        <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3">{tag1}</p>
                    </div>
                    <div>
                        {tag2 ?
                            <div className="px-2">
                                <div>
                                    <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3">{tag2}</p>
                                </div>
                            </div>
                            : null}
                    </div>
                </div>
            </div>
        </div>
    )
}