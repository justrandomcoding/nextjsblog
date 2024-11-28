import Image from "../..//components/Image";

export default function About() {
    return (

        <div>

            <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                <div className="flex flex-col items-center space-x-2 pt-8">
                    <Image
                        src='/images/avatar.png'
                        alt="avatar"
                        width={192}
                        height={192}
                        className="h-48 w-48 rounded-full"
                    />
                    <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">Ricardo</h3>
                    <div className="text-white/70">Software Developer</div>
                </div>
                <div className="prose max-w-none pb-8 pt-8 text-white/70 xl:col-span-2">
                    <p>
                        Welcome to <b>Just Random Coding</b>. I'm Ricardo, a passionate software developer who finds joy
                        in crafting digital experiences and believes in the power of technology to transform ideas into
                        reality.
                    </p>
                    <p>
                        I created this blog as a platform to share my knowledge, insights, and experiences in the world
                        of coding. Whether you're a fellow developer, a budding enthusiast, or simply curious about the
                        world of software development, my goal is to provide valuable content that inspires and
                        educates.
                    </p>
                    <p>
                        Thank you for visiting, and I look forward to sharing this exciting journey with you!
                    </p>
                </div>
            </div>
        </div>

    );
}