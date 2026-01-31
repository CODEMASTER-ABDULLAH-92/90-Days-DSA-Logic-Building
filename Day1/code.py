def print_numbers():
    for i in range(1, 11):
        print("Number:", i)
print_numbers()


def print_even():
    for i in range(1, 101):
        if i % 2 == 0:
            print("Even:", i)

print_even()


def sum_n(n):
    total = 0
    for i in range(n + 1):
        total += i
    print("Sum:", total)

sum_n(5)
