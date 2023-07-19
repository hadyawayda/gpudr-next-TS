'use client'

import { Transition, Popover, Dialog} from "@headlessui/react";
import { Fragment } from "react";

const solutions = [
  {
  name: 'Hady',
  href: 'asdas',
  description: 'lelelele',
  }
]

function Cart() {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.panel>
        <div>
          hiiiiiiiiiiiiiiiiiiiii
        </div>
      </Dialog.panel>
    </Dialog>
  );
}

export default Cart;

