# count digits

def count_digits(lst):
    count = 0
    for _ in lst:
        count += 1
    print("Total Digits are: ", count)
     
# count_digits([1,2,3,4])


# sum of digits
def sum_of_digits(lst):
    total = 0
    for idx in lst:
        total = total + idx
        # print("idx: ", idx)
    print("Sum Of Digits: ", total)

sum_of_digits([1,1,2,3,4,5,5])