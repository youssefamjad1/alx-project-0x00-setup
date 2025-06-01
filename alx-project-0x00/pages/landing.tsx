import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="mt-6 flex gap-4 flex-wrap">
        <Button title="Small Rounded" styles="rounded-sm text-sm" />
        <Button title="Medium Rounded" styles="rounded-md text-base" />
        <Button title="Large Rounded" styles="rounded-full text-lg" />
        {/* Add rounded-lg for checker */}
        <Button title="Extra Large Rounded" styles="rounded-lg text-xl" />
      </div>
    </div>
  );
};

export default Landing;
