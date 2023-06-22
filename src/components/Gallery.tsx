import React from "react";
import Carousel from 'better-react-carousel'

export default function Gallery() {
    return (
        // documentation: https://reactjsexample.com/react-responsive-carousel-component-with-grid-layout-to-easily-create-a-carousel-like-photo-gallery/
        <>
            <section className="flex flex-wrap justify-center md:w-4/5 pb-16 pt-8">
                <Carousel className="flex self-center" cols={3} rows={1} gap={20} loop>
                    {/* TODO add .map */}
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=1" alt="placeholder" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=2" alt="placeholder" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=3" alt="placeholder" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=3" alt="placeholder" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=4" alt="placeholder" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=5" alt="placeholder" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=6" alt="placeholder" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=7" alt="placeholder" />
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    )
}