
import { UseGetPrivacy } from '@/lib/services/Content';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Fee-policy | AnyJob",
    description: "Find skilled people, professionals and contractors effortlessly.",
};

const page = async () => {
    const privacy = await UseGetPrivacy() as {
        "data": {
            "key": string,
            "value": string,
            "createdAt": "2025-01-20T09:48:50.986Z",
            "updatedAt": "2025-01-20T09:48:50.986Z",
            "__v": 0
        }
    };


    return (
        <div className='bg-white'>
            {/* <h2 className='font-poppins text-3xl text-black py-40 text-center'>This page content is dynamic</h2> */}
            <div className='container py-5 md:py-8 lg:py-10'>
                <div
                    dangerouslySetInnerHTML={{
                        __html: privacy?.data?.value || "",
                    }}
                    className="font-fustat"
                ></div>
            </div>
        </div>
    );
};

export default page;