import React, {useState} from "react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command,
         CommandEmpty,
         CommandGroup,
         CommandInput,
         CommandItem,
       } from "@/components/ui/command"
import { Popover,
         PopoverContent,
         PopoverTrigger,
       } from "@/components/ui/popover"


export function GenreCombobox({genres}) {

  const [open, setOpen] = useState(false)
  const [selectedGenres, setSelectedGenres] = useState([])
  const [genreSeeds, setGenreSeeds] = useState(genres)


  const handleSelect = (currentValue) => {
    setSelectedGenres((prevGenres) => {
      return [...prevGenres, currentValue].sort()
    })
    setGenreSeeds((prevGenres) => {
      return prevGenres.filter((existingValue) => existingValue !== currentValue);
    })
  }

  const handleUnselect = (currentValue) => {
    setSelectedGenres((prevGenres) => {
      return prevGenres.filter((existingValue) => existingValue !== currentValue);
    })
    setGenreSeeds((prevGenres) => {
      return [...prevGenres, currentValue].sort()
    })
  }
   
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between text-[#BFBFBF] hover:bg-background hover:text-[#BFBFBF] round-md border-[#656565] border font-normal"
        >
          {"Genre"}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0 h-72 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <Command className="bg-background text-[#BFBFBF] h-30">
          <CommandInput placeholder="Search genres..." />
          <CommandEmpty>No genre found.</CommandEmpty>
          <CommandGroup className="hover:bg-background hover:text-[#BFBFBF]">
            {selectedGenres.length > 0 && (
              selectedGenres.map((selectedGenre) => (
                <CommandItem
                  key={selectedGenre}
                  value={selectedGenre}
                  onSelect={handleUnselect}
                  className="hover:bg-background hover:text-[#BFBFBF] hover:cursor-pointer font-semibold"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedGenres.includes(selectedGenre) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {selectedGenre}
                </CommandItem>
              ))
            )}
            {genreSeeds.map((genreSeed) => (
              <CommandItem
                key={genreSeed}
                value={genreSeed}
                onSelect={handleSelect}
                className={`hover:bg-background hover:text-[#BFBFBF] hover:cursor-pointer ${selectedGenres.includes(genreSeed) ? "font-semibold" : ""}`}
              >

                {genreSeed}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

