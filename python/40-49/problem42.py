import string

def coded_triangle_numbers(arr):
    """Returns all the coded triangle numbers in ``arr``.

    Args:
        arr: The list of words to test for coded triangle numbers.

    Returns:
        A list of words that are coded triangle numbers.
    """
    tri_gen = triangle_num()
    tri_nums = [next(tri_gen) for _ in range(26)] # Number of letters in alphabet

    coded_tri_nums = []

    for word in arr:
        char_sum = sum([uppercase_to_num(char) for char in word])
        if char_sum in tri_nums:
            coded_tri_nums.append(word)
    return coded_tri_nums


def triangle_num():
    """Triangle number generator."""
    n = 1
    while True:
        yield int((.5 * n) * (n + 1))
        n += 1


def uppercase_to_num(char):
    """Converts uppercase characters to numbers."""
    return string.ascii_uppercase.index(char) + 1


def read_create_list(filename):
    """Changes the text file into a python list."""
    with open(filename, mode="rt", encoding='utf-8') as f:
        a = f.readline()
        words = a.split(",")
        return [word[1:-1] for word in words] # Removes the quotation marks and returns a list of words.


def main(filename):
    words = read_create_list(filename)
    ctn = coded_triangle_numbers(words)
    print(len(ctn))


if __name__ == '__main__':
    main('p042_words.txt')
