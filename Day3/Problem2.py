# palindrome number

nums = list("1234321")

start = 0
end = len(nums) - 1
is_palindrome = True

while start < end:
    if nums[start] != nums[end]:
        is_palindrome = False
        break
    start += 1
    end -= 1

if is_palindrome:
    print("Palindrome Number")
else:
    print("Not a Palindrome Number")


"""
This is Excellent Solution but i'cant resolve this 

"""

# num = 1234321
# original = num
# rev = 0

# while num > 0:
#     digit = num % 10
#     rev = rev * 10 + digit
#     num //= 10

# if original == rev:
#     print("Palindrome Number")
# else:
#     print("Not a Palindrome Number")
