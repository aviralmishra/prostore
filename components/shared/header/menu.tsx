import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';

import ModeToggle from './mode-toggle';

const Menu = () => {
    return (
        <div className="flex justify-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
                <div className="space-x-2">
                    <ModeToggle></ModeToggle>
                    <Button
                        asChild
                        variant="ghost"
                    >
                        <Link href="/cart">
                            <ShoppingCart />
                            Cart
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="/cart">
                            <UserIcon />
                            Sign In
                        </Link>
                    </Button>
                </div>
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className="align-middle">
                        <EllipsisVertical></EllipsisVertical>
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start">
                        <SheetTitle>Menu</SheetTitle>
                        <ModeToggle></ModeToggle>
                        <Button
                            asChild
                            variant="ghost"
                        >
                            <Link href="/cart">
                                <ShoppingCart />
                                Cart
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href="/cart">
                                <UserIcon />
                                Sign In
                            </Link>
                        </Button>
                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
};

export default Menu;
