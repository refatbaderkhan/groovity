import React, { useState, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function MusicWindowCategoryFilterCombobox({ categories, selectedCategories, setSelectedCategories,}) {

  const [open, setOpen] = useState(false);
  const [categorySeeds, setCategorySeeds] = useState(categories);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCategorySeeds(categories);
    setLoading(false);
  }, [categories]);

  const handleSelect = (categorySeed) => {
    setSelectedCategories([...selectedCategories, categorySeed].sort((a, b) => a.name.localeCompare(b.name)));
    setCategorySeeds(categorySeeds.filter((c) => c.id !== categorySeed.id));
  };

  const handleUnselect = (categorySeed) => {
    setSelectedCategories(selectedCategories.filter((c) => c.id !== categorySeed.id));
    setCategorySeeds([...categorySeeds, categorySeed].sort((a, b) => a.name.localeCompare(b.name)));
  };

  if (loading) return null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between text-[#BFBFBF] hover:bg-background hover:text-[#BFBFBF] round-md border-[#656565] border font- h-7"
        >
          {"Category"}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <Command className="bg-background text-[#BFBFBF] flex flex-col h-72">
          <CommandInput
            placeholder="Search categories..."
            className="h-10"
          />
          <CommandEmpty>No genre found.</CommandEmpty>
          <CommandGroup className="hover:bg-background hover:text-[#BFBFBF] overflow-y-scroll flex flex-col">
            {selectedCategories.length > 0 && (
              selectedCategories.map((selectedCategory) => (
                <CommandItem
                  key={selectedCategory.id}
                  value={selectedCategory}
                  onSelect={() => handleUnselect(selectedCategory)}
                  className="hover:bg-background hover:text-[#BFBFBF] hover:cursor-pointer font-semibold"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedCategories.includes(selectedCategory)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {selectedCategory.name}
                </CommandItem>
              ))
            )}
            {categorySeeds.map((categorySeed) => (
              <CommandItem
                key={categorySeed.id}
                value={categorySeed}
                onSelect={() => handleSelect(categorySeed)}
                className={`hover:bg-background hover:text-[#BFBFBF] hover:cursor-pointer ${
                  selectedCategories.includes(categorySeed)
                    ? "font-semibold"
                    : ""
                }`}
              >
                {categorySeed.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
