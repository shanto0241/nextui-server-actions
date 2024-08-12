"use client";
import { Card, CardBody } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";

import FeaturedGallery from "./featured-gallery";

export default function AlbumTabs() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" className="mx-auto">
        <Tab key="nature" title="Nature">
          <Card className="p-2">
            <FeaturedGallery />
          </Card>
        </Tab>
        <Tab key="music" title="Music">
          <Card className="p-2">
            <FeaturedGallery />
          </Card>
        </Tab>
        <Tab key="street" title="Street">
          <Card className="p-2">
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="urban" title="Urban">
          <Card className="p-2">
            <FeaturedGallery />
          </Card>
        </Tab>
        <Tab key="sports" title="Sports">
          <Card className="p-2">
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="wedding" title="Wedding">
          <Card className="p-2">
            <FeaturedGallery />
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
