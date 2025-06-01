import Button from '@/components/Button';
import Card from '@/components/Card';
import React from 'react';

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

        <div className="mt-6 flex gap-4 flex-wrap">
        <Button title="Small Rounded" styles="rounded-sm text-sm" />
        <Button title="Medium Rounded" styles="rounded-md text-base" />
        <Button title="Large Rounded" styles="rounded-full text-lg" />
      </div>
    </div>
  );
};

export default Landing;
