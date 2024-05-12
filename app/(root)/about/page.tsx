import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection';
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-12 space-y-4">
        <section className="bg-primary text-white bg-dotted-pattern rounded-md bg-contain py-5 md:py-12">
          <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
            <div className="flex flex-col justify-center gap-8">
              <h1 className="h2-bold">
                Connect, Engage, Empower: Elevate Your Events.
              </h1>
              <p className="p-regular-20 md:p-regular-23">
                The all-in-one platform for hosting impactful events, fostering
                meaningful connections, and celebrating milestones.
              </p>
            </div>

            <Image
              src="/assets/images/about-image.png"
              alt="hero"
              width={2000}
              height={2000}
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            />
          </div>
        </section>
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Host</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/assets/images/host-image.jpg"
                  alt="Host Image"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700">
                  We empower event hosts to create unforgettable experiences and
                  connect with their audience in meaningful ways. Whether it's a
                  small gathering or a large conference, our platform provides
                  the tools and support needed to bring events to life.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700">
                  Discover new and exciting events happening in your area or
                  around the world. From music festivals to cooking classes, our
                  platform makes it easy to find and attend events that match
                  your interests and passions.
                </p>
              </div>
              <div>
                <Image
                  src="/assets/images/discover-image.jpg"
                  alt="Discover Image"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/assets/images/join-image.jpg"
                  alt="Join Image"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700">
                  Join our community of event organizers and attendees who are
                  passionate about bringing people together and creating
                  unforgettable experiences. Whether you're hosting an event or
                  attending one, you're part of something special.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
