import sys, json
my_name = 'Carlos'
my_age = 18 # not a lie
my_height = 172 # cm
my_weight = 71 # kg
my_eyes = 'Brown'
my_teeth = 'White'
my_hair = 'Black'

print "Let's talk about %s." % my_name
print "He's %d centimeters tall." % my_height
print "He's %d kilograms heavy." % my_weight
print "Actually that's not too heavy."
print "He's got %s eyes and %s hair." % (my_eyes, my_hair)
print "His teeth are usually %s depending on the coffee." % my_teeth

# this line is tricky, try to get it exactly right
print "If I add %d, %d, and %d I get %d. I don't know what that means but, whatever." % (
    my_age, my_height, my_weight, my_age + my_height + my_weight)
def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()

    # Sum  of all the items in the providen array
    total_sum_inArray = 0
    for item in lines:
        print item
if __name__ == '__main__':
    main()
